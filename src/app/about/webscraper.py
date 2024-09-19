import requests
from bs4 import BeautifulSoup

# Define the target URL
url = "https://nobero.com/pages/men"

# Make a GET request to fetch the HTML content
response = requests.get(url)

# Check for successful response
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all product elements (adjust the selector based on the website's structure)
    products = soup.find_all('div', class_="custom-page-season-grid-item")  # Replace with appropriate class

    # Extract and store product data
    scraped_products = []
    for product in products:
        product_data = {}

        # Category (assuming it's available)
        category = product.find('span', class_='category-label')  # Replace with appropriate class
        if category:
            product_data["category"] = category.text.strip()

        # URL
        product_link = product.find('a', href=True)  # Assuming the product link is within an anchor tag
        if product_link:
            product_url = product_link['href']
            product_data["url"] = f"https://nobero.com{product_url}"

        # Title
        product_title = product.find('h1', class_="capitalize text-lg md:text-[1.375rem] font-[familySemiBold] leading-none")  # Replace with appropriate class
        if product_title:
            product_data["title"] = product_title.text.strip()

        # Extract price information (assuming price elements are available)
        price_container = product.find('div', class_='flex gap-1.5 md:gap-2 items-center')  # Replace with appropriate class
        if price_container:
            # Extract main price
            price_text = price_container.find('h2', class_='variant-price')  # Replace with appropriate class
            if price_text:
                try:
                    product_data["price"] = float(price_text.text.strip().replace(',', ''))
                except ValueError:
                    pass  # Handle potential errors in price format

            # Extract MRP (if available)
            mrp_text = price_container.find('del')  # Assuming MRP is in a strikethrough element
            if mrp_text:
                try:
                    product_data["MRP"] = float(mrp_text.text.strip().replace(',', ''))
                except ValueError:
                    pass

        # Extract additional details using similar logic for elements containing color, size, etc.

        # ... (Implement logic to extract other desired product details) ...

        scraped_products.append(product_data)

    # Print or store the scraped product data (e.g., save to JSON)
    print(scraped_products)

else:
    print(f"Error: Failed to retrieve data from {url}")