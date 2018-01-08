const actionLogger = () => next => action => {
    console.log(action);
    return next(action);
};

export default actionLogger;
