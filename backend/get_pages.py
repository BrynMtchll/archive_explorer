import json
import asyncio
import aiohttp
import time

page_data = {}
years = ["", "2022", "2021", "2020", "2019", "2018"]
months = ["", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

urls = {
   'The_Startup': ['https://medium.com/swlh/archive'],
}

def construct_urls():
    for pub, urlList in urls.items():
        baseUrl = urlList[0]
        for year in years:
            if year == "":
                continue
            for month in months:
                url = baseUrl
                url += "/" + year
                if month != "":
                    url += "/" + month

                urls[pub].append(url)
            
async def download_page(session, url, pub):
    async with session.get(url) as response: 
        if response.status == 200:
            page_content = await response.text()
            page_data[pub][url] = page_content
            print("got ", url)

async def download_all_pages(urls):
    async with aiohttp.ClientSession() as session:
        tasks = []
        for pub, urlList in urls.items():
            page_data[pub] = {}
            for url in urlList:
                task = asyncio.ensure_future(download_page(session, url, pub))
                tasks.append(task)
        await asyncio.gather(*tasks, return_exceptions = True)

def main():
    start_time = time.time()

    construct_urls()
    asyncio.get_event_loop().run_until_complete(download_all_pages(urls))

    for pub, url in page_data.items():
        with open(f'data/page_data/{pub}.json', 'w') as f:
            json.dump(page_data[pub], f)

    duration = time.time() - start_time
    print("duration: ", duration)

main()