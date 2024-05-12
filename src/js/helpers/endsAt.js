export default function endsAt(date) {
    const endDate = new Date(date);
    const now = new Date()

    const timeLeft = endDate - now;

    const days = (Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
        return `${days} d ${hours} h ${minutes} min`
    }

    if (hours > 0) {
        return `${hours} h ${minutes} min`
    }

    return `${minutes} min`
}