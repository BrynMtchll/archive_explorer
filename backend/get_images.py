import asyncio
import aiohttp
import aiofiles
import imageio
import json
import time

image_url_data = {}
image_data = {}
default_image = imageio.imread('default_image.jpeg')

async def download_image(session, url, id):
    global default_image
    if url is None:
        imageio.imwrite(f'images/{id}.jpg', default_image)
        return

    async with session.get(url) as response: 
        if response.status == 200:
            async with aiofiles.open(f'images/{id}.jpg', 'wb') as f:

                await f.write(await response.read())

async def download_all_images(url_data):
    async with aiohttp.ClientSession() as session:
        tasks = []
        for id, url in url_data.items():
            task = asyncio.ensure_future(download_image(session, url, id))
            tasks.append(task)
        await asyncio.gather(*tasks, return_exceptions = True)

def main():
    start = time.time()
    with open('data/image_url_data.json', 'r') as f:
        image_url_data = json.load(f)
    asyncio.get_event_loop().run_until_complete(download_all_images(image_url_data))
    duration = time.time() - start
    print(duration)

main()