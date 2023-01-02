function broadcast(componentName, eventName, params) {
      this.$children.forEach(child => {
        const name = child.$options.name

        if(name === componentName){
          child.$emit.apply(child, [eventName].concat(params))
        } else {
          // 此处为什么是[params] ，因为params本身是一个数组，但是他在apply里只是一个元素，所以需要[]
          broadcast.apply(child, [componentName, eventName].concat([params]))
        }
      });
}

export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if(parent) {
          name = parent.$options.name
        }
      }

      if(parent) {
        parent.$emit.apply(parent,[eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, params) {
      // 为什么需要把broadcast领出来，因为需要递归
      broadcast.call(this, componentName, eventName, params);
  }
  }
}