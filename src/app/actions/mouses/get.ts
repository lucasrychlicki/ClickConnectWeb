export async function getMouses() {
    const resp = await fetch(`${process.env.API_BASE_URL}/mouse`, { next: { revalidate: 0 } })
    return await resp.json()
}