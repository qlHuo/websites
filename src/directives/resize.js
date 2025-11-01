/**
 * @Description yu
 * @Author holyer
 * @Date 2025/10/26 12:01:12
 * @param { Boolean }
 * @return { Boolean }
 */
export default {
  bind(el, binding, vnode) {
    const handler = () => vnode.context[binding.expression].apply();
    el.resizeObserver = new ResizeObserver(handler);
    el.resizeObserver.observe(el);
  },

  unbind(el) {
    if (el.resizeObserver) {
      el.resizeObserver.unobserve(el);
      el.resizeObserver.disconnect();
      el.resizeObserver = null;
    }
  }
};
