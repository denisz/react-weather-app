class CurrentPositionService {
    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                location => resolve(location),
                error => reject(error),
            )
        })
    }
}

export { CurrentPositionService }