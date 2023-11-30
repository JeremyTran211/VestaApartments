# ReadMe with commands and urls to test backend APIs

# To test the search bar api on homepage 
endpoint: http://localhost:3000/searchBar
url http://localhost:3000/searchBar?Region_ID=91303&Address=123 Main St, South San Francisco, CA 94080

to test for partial address input

http://localhost:3000/searchBar?Region_ID=91303&Address=123 Main St
will find listing with zipcode 3000 and Address 123 Main St, South San Francisco, CA 94080

# To test search on listing page
endpoint: http://localhost:3000/search
http://localhost:3000/search?Rooms=1&Bathrooms=1&Min_Price=100&Max_Price=10000&Property_Type=House


# To test add a user 
endpoint: http://localhost:3000/users
curl -i -X POST -H 'Accept: application/json' \
-H 'Content-type: application/json' http://localhost:3000/users \
--data '{"User_ID": "Jeff", "Password": "Test4", "Email": "Jeff677@gmail.com", "First_Name": "Jeff", "Last_Name": "Jefferson"}'

# To test update a user's first name and last name only
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/users/lmpciaexa1eemm@ol \
    --data '{"First_Name": "Bobby", "Last_Name":"Bill"}'

# for updating email for a user
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/users/lmpciaexa1eemm@ol \
    --data '{"Email": "Bob677@gmail.com"}'

# for updating only password for a user
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/users/lmpciaexa1eemm@ol \
    --data '{"Password": "Test 30"}'


# for updating everything for a user
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/users/lmpciaexa1eemm@ol \
    --data '{"Password": "Test 30", "Email": "Billlyyyyy677@gmail.com", "First_Name": "Bobbyyyy", "Last_Name":"Billyyyy"}'

# To test delete a user by userid
curl -i -X DELETE -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/users/jeff

# To test inserting a listing for everything
endpoint: http://localhost:3000/listings
curl -i -X POST -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/listings \
    --data '{"Listing_ID": 5, "User_ID": "alice", "Location_ID": 3, "Rooms": 3, "Bathrooms": 5, "Price": 2500, "Property_Type": "House", "Description": "Huge house in the middle of downtown SF", "Gas_And_Electric": 1, "Internet": 1, "Water": 0, "Garbage": 1, "Square_Feet": 3200, "Image_Path": "/images/124.jpg", "Time_Stamp": "2023-11-21 23:58:55.000000", "Hidden": 0, "Title": "Downtown Apartment"}'

# To test update listing for everything
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/listings/4 \
    --data '{"Listing_ID": 4, "User_ID": "alice", "Location_ID": 3, "Rooms": 3, "Bathrooms": 5, "Price": 2500, "Property_Type": "House", "Description": "Huge house in the middle of downtown SF", "Gas_And_Electric": 1, "Internet": 1, "Water": 0, "Garbage": 1, "Square_Feet": 3200, "Image_Path": "/images/124.jpg", "Time_Stamp": "2023-11-21 23:58:55", "Hidden": 0, "Title": "Downtown Apartment"}'

# To test update listing for only some data
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/listings/4 \
    --data '{"Rooms": 2, "Bathrooms": 1, "Price": 700, "Location_ID": 2}'
OR
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/listings/4 \
    --data '{"Rooms": 2, "Bathrooms": 1}'

# To test delete listing by listingID
curl -i -X DELETE -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/listings/4

# To test phone number verificiation API 
http://localhost:3000/number_verification?phone_number=15103617004
OR 
curl -G -v "http://localhost:3000/search" --data-urlencode "Rooms=1" --data-urlencode "Bathrooms=1" --data-urlencode "Price=13500" --data-urlencode "Property_Type=House"

# To test post API 
enpoint: http://localhost:3000/post

# To test Renter Screening API
endpoint: http://localhost:3000/screening?Status=Approved&Credit_Score=750&Income=50000&Saved_Properties_ID=1 

# To test Location of Rental Listing
endpoint: http://localhost:3000/locationListingAPI

to test for partial address input

url http://localhost:3000/locationListingAPI/?RegionName=Downtown
or
url http://localhost:3000/locationListingAPI/?RegionName=Downtown&Address=456 Elm St, South San Francisco, CA 94080


# Test to get the last changes in the Profile table
endpoint: http://localhost:3000/accountTypeAPI


# Test accountType API for user named alice
http://localhost:3000/accountType?User_ID=alice&AccountType=Landlord



# To update accountType if it is "Renter"
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/accountTypeAPI/alice \
    --data '{  "AccountType": "Renter" }'


# To update the account type if it is "Landlord"
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/accountTypeAPI/alice \
    --data '{  "AccountType": "Landlord" }'


# To update the account type if it is "Delete"
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/accountTypeAPI/alice \
    --data '{  "AccountType": "Delete" }'


# Test for phoneNumberAPI
http://localhost:3000/phoneNumberAPI/



# To update the phone number
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/phoneNumberAPI/alice \
    --data '{  "PhoneNumber": "408-555-1234" }'


# To test delete the phone number
curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/phoneNumberAPI/alice \
    --data '{  "PhoneNumber": "Delete" }'

# To test getting all the comments available
http://localhost:3000/comments

# To test getting all comments with a specific post id
http://localhost:3000/comments?Post_ID=3

# To test updating a comment
curl -X PUT -H "Content-Type: application/json" -d '{
    "User_ID_Current": "charlie",
    "User_ID": "charlie",
    "Post_ID": "3",
    "Text": "Spacious Living room",
    "Timestamp": "2023-11-26T10:10:00.000",
    "Like_Counter": "0"
}' http://localhost:3000/comments/3


# To test removing a comment 
curl -X DELETE -H "Content-Type: application/json" -d '{
    "User_ID_Current": "charlie",
    "User_ID": "charlie",
    "Post_ID": "3",
    "Text": "Spacious Living room",
    "Timestamp": "2023-11-26T10:10:00.000",
    "Like_Counter": "0"
}' http://localhost:3000/comments/3

# To test posting a new comment
curl -X POST -H "Content-Type: application/json" -d '{
    "User_ID_Current": "charlie",
    "User_ID": "charlie",
    "Post_ID": "3",
    "Text": "very Spacious Living room",
    "Timestamp": "2023-11-26T10:10:00.000",
    "Like_Counter": "0"
}' http://localhost:3000/comments/2


