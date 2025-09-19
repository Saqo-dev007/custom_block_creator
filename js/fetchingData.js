export default async function fetchingData(query) {
    const resp = await fetch(query);
    const data = await resp.blob();

    return data;
}