class Bind {

    constructor(model, view, props) {

       let proxy = ProxyFactory.createProxy(model, props, model => {
           view.update(model)
       });

       view.update(model);
       return proxy;
    }
}