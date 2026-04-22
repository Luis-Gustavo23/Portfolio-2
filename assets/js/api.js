async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Luis-Gustavo23/Portfolio-2/refs/heads/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}