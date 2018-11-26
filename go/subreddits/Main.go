package main

import (
	"encoding/json"
	"log"
	"os"
	"subreddits/scrapper/reddit"
)


func main() {
	subReddits := os.Args[1:]

	if len(subReddits) == 0 {
		log.Fatal("Necessita informar os subreddits")
		os.Exit(1)
	}

	enc := json.NewEncoder(os.Stdout)
	enc.SetIndent("", "  ")
	for _, r := range subReddits {
		stories := reddit.ScraperReddit(r)
		enc.Encode(stories)
	}
}