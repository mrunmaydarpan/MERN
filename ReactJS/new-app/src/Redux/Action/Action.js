function increment(data) {
    return (
        {
            type: 'increment',
            payload: data
        }
    )
}

export { increment }

export const AddToCart = (data) => {
    return (
        {
            type: "AddToCart",
            payload: data
        }
    )
}

export const RemoveFromCart = (data) => {
    return (
        {
            type: "RemoveFromCart",
            payload: data
        }
    )
}