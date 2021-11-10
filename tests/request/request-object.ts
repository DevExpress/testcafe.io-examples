interface RequestObject {
    userAgent: String,
    request: {
        url: String,
        method: String,
        headers: Object,
        body: Buffer | String,
        timestamp: Number
    },
    response: {
        statusCode: Number,
        headers: Object,
        body: Buffer | String,
        timestamp: Number
    }
}
