const clearSwipe = (obj, swipeEvent) => {
    swipeEvent.forEach(({name, handler}) => {
        obj.removeEventListener(name, handler);
    });
};

export default clearSwipe;