
export const groupStatusByContact = (status) => {
    return status.reduce((grouped, status) => {
        const contactId = status.contact._id;

        if (contactId) {
            if (!grouped[contactId]) {
                grouped[contactId] = []
            }
            grouped[contactId].push(status)
        }

        return Object.values(grouped);
    }, {})
}