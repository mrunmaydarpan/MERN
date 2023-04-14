function increment(data) {
    return (
        {
            type: 'increment',
            payload: data
        }
    )
}

export { increment }