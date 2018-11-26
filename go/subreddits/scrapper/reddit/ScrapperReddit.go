package reddit

import "C"
import (
	"fmt"
	"github.com/gocolly/colly"
	"strconv"
	"time"
)

const MinUpvotes = 5000

type SubReddit struct {
	StoryURL  string
	comments  string
	CrawledAt time.Time
	Comments  string
	Title     string
	Upvotes	  int64
}

func ScraperReddit(subreddit string) []SubReddit {

	stories := []SubReddit{}

	reddit := colly.NewCollector()

	c := reddit.Clone()

	reddit.OnHTML("#header .tabmenu li:nth-child(5) a", func(e *colly.HTMLElement) {
		c.Visit(e.Attr("href"))
	})

	// Before making a request print "Visiting ..."
	c.OnRequest(func(r *colly.Request) {
		fmt.Println("Visiting", r.URL.String())
	})

	c.OnHTML("div[data-subreddit]", func(e *colly.HTMLElement) {

		Upvotes, err := strconv.ParseInt(e.ChildAttr(".score.unvoted[title]", "title"), 10, 64)
		if err != nil {
			return
		}

		if Upvotes < MinUpvotes {
			return
		}
		e.Request.Ctx.Put("found", "true")

		story := SubReddit{}
		story.Upvotes = Upvotes
		story.Title = e.ChildText("a[data-event-action=title]")
		story.StoryURL = e.ChildAttr("a[data-event-action=title]", "href")
		story.Comments = e.ChildAttr("a[data-event-action=comments]", "href")
		story.CrawledAt = time.Now()

		stories = append(stories, story)
	})

	c.OnHTML("span.next-button", func(e *colly.HTMLElement) {
		FoundReddits, _ := strconv.ParseBool( e.Request.Ctx.Get("found") )

		if FoundReddits {
			t := e.ChildAttr("a", "href")
			c.Visit(t)
		}
	})

	reddit.Visit("https://old.reddit.com/r/" + subreddit)

	reddit.Wait()
	c.Wait()

	return stories
}