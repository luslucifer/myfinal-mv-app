import requests
from bs4 import BeautifulSoup
import json

# Define the debsite URL to crawl
base_url = "https://your-debsite-url.com"

# Initialize empty list to store URLs
urls = []

# Recursive function to crawl pages and extract URLs
def crawl_page(url):
  # Fetch the page content
  response = requests.get(url)

  # Check for successful response
  if response.status_code == 200:
    # Parse HTML content
    soup = BeautifulSoup(response.content, "lxml")

    # Find all anchor tags within the page
    for link in soup.find_all("a"):
      # Extract the href attribute as potential URL
      href = link.get("href")

      # Check if the link is relative and starts with "/"
      if href and href.startswith("/"):
        # Join the relative URL with the base URL
        full_url = base_url + href

        # Check if the URL is not already visited and not external
        if full_url not in urls and not full_url.startswith("http://") and not full_url.startswith("https://"):
          # Add the URL to the list
          urls.append(full_url)

          # Recursively crawl the extracted URL
          crawl_page(full_url)

# Start crawling the base URL
crawl_page(base_url)

# Save extracted URLs to a JSON file
with open("extracted_urls.json", "w") as f:
  json.dump(urls, f, indent=4)

print("Crawling completed! Extracted URLs saved to extracted_urls.json")
