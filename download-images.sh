#!/bin/bash

# Create directory if not exists
mkdir -p vn-history-web/src/assets/images/dong-son

# Download images
# Trong dong 1 - Trong Dong Son dien hinh
curl -o vn-history-web/src/assets/images/dong-son/trong-dong-1.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Dong_Son_bronze_drums.JPG/800px-Dong_Son_bronze_drums.JPG"

# Trong dong 2 - Trong dong Hoang Ha
curl -o vn-history-web/src/assets/images/dong-son/trong-dong-2.jpg "https://baotanglichsu.vn/DataFiles/2014/06/News/TrongDong.jpg"

# Trong dong 3 - Trong dong Co Loa
curl -o vn-history-web/src/assets/images/dong-son/trong-dong-3.jpg "https://baotanglichsu.vn/DataFiles/2014/06/News/TrongDongCoLoa.jpg"

# Trong dong 4 - Trong dong Ngoc Lu
curl -o vn-history-web/src/assets/images/dong-son/trong-dong-4.jpg "https://baotanglichsu.vn/DataFiles/2014/06/News/TrongDongNgocLu.jpg"

# Hoa van 1 - Mat trong
curl -o vn-history-web/src/assets/images/dong-son/hoa-van-1.jpg "https://baotanglichsu.vn/DataFiles/2014/06/News/HoaVanTrongDong1.jpg"

# Hoa van 2 - Hinh nguoi va chim
curl -o vn-history-web/src/assets/images/dong-son/hoa-van-2.jpg "https://baotanglichsu.vn/DataFiles/2014/06/News/HoaVanTrongDong2.jpg"

echo "Downloaded all images successfully!" 