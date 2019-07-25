const onSwipe = (obj, handleswipe) => {
    let startY,
        dist = 0

    const touchstartHandler = (e) => {
        const touchobj = e.changedTouches[0];
        dist = 0;
        startY = touchobj.pageY
    }

    const touchendHandler = (e) => {
        const touchobj = e.changedTouches[0];
        dist = touchobj.pageY - startY;
        handleswipe(dist > 0);
    }

    obj.addEventListener('touchstart', touchstartHandler, false);
    obj.addEventListener('touchend', touchendHandler, false);

    return [{event:"touchstart", handler: touchstartHandler}, {event:"touchstart", handler: touchendHandler}]
};

export default onSwipe;