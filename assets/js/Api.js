


async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/LucMancebo/Portifolio/refs/heads/main/Data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}