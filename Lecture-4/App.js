import React from "react"
import ReactDOM from "react-dom/client"


const Title = () => (
    <a href="/">
        <img className="logo" src="https://png.pngtree.com/png-vector/20220623/ourlarge/pngtree-food-logo-png-image_5296974.png" alt="logo" />
    </a>
)

//React Components
const Header = () => (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

const kfcKing =
    [
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "628871",
                "name": "Starbucks Coffee",
                "uuid": "17a74c05-2b8c-4655-b5fd-38af0ecc6937",
                "city": "42",
                "area": "Polo Ground",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "6fdef01479873a8eed0e194f83bfb9c7",
                "cuisines": [
                    "Beverages"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "slaString": "28 MINS",
                "lastMileTravel": 4.300000190734863,
                "slugs": {
                    "restaurant": "starbucks-coffee-saheli-marg-panchwati",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "Tata Starbucks, 11, Saheli Marg, Fatehpura, Polo Ground, Udaipur, Rajasthan 313001",
                "locality": "Saheli Marg",
                "parentId": 195515,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "30% off",
                    "shortDescriptionList": [
                        {
                            "meta": "30% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "30% off up to ₹75 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "30% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "30% off up to ₹75 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5936718~p=1~eid=00000186-4935-a47a-381f-9079005a0145",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "4.3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "628871",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 4.300000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.8",
                "totalRatings": 100,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "343749",
                "name": "Daya Nashta & Fast Food",
                "uuid": "c3df5419-487e-4730-9479-0b708983e399",
                "city": "42",
                "area": "Pahada",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "pfdzunijeynghgrtfrd7",
                "cuisines": [
                    "Desserts",
                    "Chinese",
                    "Burgers"
                ],
                "tags": [],
                "costForTwo": 10000,
                "costForTwoString": "₹100 FOR TWO",
                "deliveryTime": 16,
                "minDeliveryTime": 16,
                "maxDeliveryTime": 16,
                "slaString": "16 MINS",
                "lastMileTravel": 0.5,
                "slugs": {
                    "restaurant": "daya-nasta-center-panchwati-panchwati",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "UNIVERSITY ROAD ,AYAD,UDAIPUR",
                "locality": "Panchwati",
                "parentId": 69025,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "343749",
                    "deliveryTime": 16,
                    "minDeliveryTime": 16,
                    "maxDeliveryTime": 16,
                    "lastMileTravel": 0.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "76627",
                "name": "KFC",
                "uuid": "2c293249-6d92-49fb-86b2-9ab82ed4fa1f",
                "city": "42",
                "area": "Shakti Nagar",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "tags": [],
                "costForTwo": 45000,
                "costForTwoString": "₹450 FOR TWO",
                "deliveryTime": 17,
                "minDeliveryTime": 17,
                "maxDeliveryTime": 17,
                "slaString": "17 MINS",
                "lastMileTravel": 0.30000001192092896,
                "slugs": {
                    "restaurant": "kfc-lake-city-mall-test-udaipur",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "lake city mall,kfc restaurant 110/3 ,university road ashok nagar, udaipur,Rajasthan-313001",
                "locality": "Lake City Mall",
                "parentId": 547,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "76627",
                    "deliveryTime": 17,
                    "minDeliveryTime": 17,
                    "maxDeliveryTime": 17,
                    "lastMileTravel": 0.30000001192092896,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.9",
                "totalRatings": 5000,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "254003",
                "name": "McDonald's",
                "uuid": "f0bdc958-245a-4a98-8d58-b69430efc8dd",
                "city": "42",
                "area": "Bhuwana",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
                "cuisines": [
                    "American"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "slaString": "29 MINS",
                "lastMileTravel": 3.9000000953674316,
                "slugs": {
                    "restaurant": "mcdonalds-rj-udaipur-panchwati",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "RJ Udaipur, G9, Celebration Mall, NH-8, Opp. Devendra Dham, Bhuwana,Udaipur (Rajasthan)-313001",
                "locality": "RJ Udaipur",
                "parentId": 630,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5925119~p=4~eid=00000186-4935-a47a-381f-907a005a0423",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "3.9 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "254003",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 3.9000000953674316,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.1",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "281707",
                "name": "Jain Nastha Center",
                "uuid": "22cb87ba-4e8f-4e01-8962-ce7eff9545f1",
                "city": "42",
                "area": "Shakti Nagar",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "xhhwvcbmzqrbicmiy9p4",
                "cuisines": [
                    "Desserts",
                    "South Indian"
                ],
                "tags": [],
                "costForTwo": 10000,
                "costForTwoString": "₹100 FOR TWO",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "slaString": "20 MINS",
                "lastMileTravel": 1.5,
                "slugs": {
                    "restaurant": "jain-nastha-center-city-center-city-center",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "Opposite post office, near v-mart, Shastri circle, Udaipur (Raj)- 313001",
                "locality": "City Center",
                "parentId": 108946,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "281707",
                    "deliveryTime": 20,
                    "minDeliveryTime": 20,
                    "maxDeliveryTime": 20,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.2",
                "totalRatings": 100,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "247469",
                "name": "Guddu Bhai Kachori Wala",
                "uuid": "8799fa93-5800-46b1-9995-ade2557cf34c",
                "city": "42",
                "area": "Shakti Nagar",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "oangujhwy6r4xsf3jdjj",
                "cuisines": [
                    "Pastas",
                    "Desserts",
                    "South Indian",
                    "Burgers",
                    "Pizzas"
                ],
                "tags": [],
                "costForTwo": 13000,
                "costForTwoString": "₹130 FOR TWO",
                "deliveryTime": 17,
                "minDeliveryTime": 17,
                "maxDeliveryTime": 17,
                "slaString": "17 MINS",
                "lastMileTravel": 0.5,
                "slugs": {
                    "restaurant": "guddu-bhai-kachori-wala-city-center-city-center",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "Guddu Bhai Kachori Wala shop no 19, plot no 14,, Durga Nursery Road Corner, Ashok Nagar Main Road, Opp Sukhadiya Samadhi, Udaipur",
                "locality": "City Center",
                "parentId": 91153,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "247469",
                    "deliveryTime": 17,
                    "minDeliveryTime": 17,
                    "maxDeliveryTime": 17,
                    "lastMileTravel": 0.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.3",
                "totalRatings": 500,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "524765",
                "name": "Biryani By Kilo",
                "uuid": "284ebac8-6438-43b8-8502-523e145f372b",
                "city": "42",
                "area": "Subhash Nagar",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "wuduexcvclper1y10fpe",
                "cuisines": [
                    "Biryani",
                    "Hyderabadi",
                    "North Indian",
                    "Kebabs",
                    "Mughlai",
                    "Desserts"
                ],
                "tags": [],
                "costForTwo": 60000,
                "costForTwoString": "₹600 FOR TWO",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "slaString": "36 MINS",
                "lastMileTravel": 0.8999999761581421,
                "slugs": {
                    "restaurant": "biryani-by-kilo-shastri-circle-hiran-magri",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "Commercial Ground Floor, at 4 Gokul Pura University Main Road, Girwa, Udaipur Shastri Circle, Girwa, Udaipur, Rajasthan-313001",
                "locality": "Subhash Nagar",
                "parentId": 130,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5824822~p=7~eid=00000186-4935-a47a-381f-907b005a0717",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.8 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "524765",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 0.8999999761581421,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.1",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "425764",
                "name": "Aravindham Udaipur - Authentic South Indian Vegetarian Restaurant",
                "uuid": "e048c0c7-d544-43cb-af7e-ae69ab9d1c99",
                "city": "42",
                "area": "City Center",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "xteuj9pareabingbqyps",
                "cuisines": [
                    "South Indian",
                    "Desserts",
                    "Beverages",
                    "Juices"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "slaString": "20 MINS",
                "lastMileTravel": 0.20000000298023224,
                "slugs": {
                    "restaurant": "aravindham-,-simply-chennai-se-city-center-city-center",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "32, University Rd, Luhar Colony, Ayad, Kharakua, Udaipur, Rajasthan 313001, India",
                "locality": "Luhar Colony",
                "parentId": 314271,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.2 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "425764",
                    "deliveryTime": 20,
                    "minDeliveryTime": 20,
                    "maxDeliveryTime": 20,
                    "lastMileTravel": 0.20000000298023224,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.3",
                "totalRatings": 500,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "472779",
                "name": "Radhika Chat Center Nashta",
                "uuid": "56c004c4-6f31-476f-9ee0-e6f583e24b1e",
                "city": "42",
                "area": "Panchwati",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "uft1uonypxw2buve9kkb",
                "cuisines": [
                    "Fast Food",
                    "Chinese"
                ],
                "tags": [],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "slaString": "28 MINS",
                "lastMileTravel": 0.4000000059604645,
                "slugs": {
                    "restaurant": "radhika-chat-center-nashta-panchwati-panchwati",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "RADHIKA CHAT CENTER NASHTA ,02 UNIVERSITY 100 FEET ROAD NEAR AONE SCHOOL UDAIPUR RAJASTHAN",
                "locality": "Panchwati",
                "parentId": 285000,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.4 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "472779",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 0.4000000059604645,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "--",
                "totalRatings": 0,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "86866",
                "name": "Dil Punjabi Dhaba",
                "uuid": "7d2a3166-4768-4910-8b71-b59405fdd654",
                "city": "42",
                "area": "Central Area",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "ld8eo0baqp26xcprjxbd",
                "cuisines": [
                    "Pastas",
                    "Chinese",
                    "North Indian",
                    "Biryani"
                ],
                "tags": [],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "slaString": "24 MINS",
                "lastMileTravel": 1.899999976158142,
                "slugs": {
                    "restaurant": "dil-punjabi-dhaba-shobhagpura-panchwati",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "2, Rasbagh, 100 Feet Road, Mali Colony, Udaipur Udaipur",
                "locality": "Hiran Magri",
                "parentId": 72660,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5937702~p=10~eid=00000186-4935-a47a-381f-907c005a0a15",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1.8 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "86866",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 1.899999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.8",
                "totalRatings": 10000,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "441048",
                "name": "Cake Golden",
                "uuid": "ccb40858-d740-4f09-bdbe-f8e331c29810",
                "city": "42",
                "area": "City Center",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "svz0g8kuc9rcqwp4w1wg",
                "cuisines": [
                    "Bakery"
                ],
                "tags": [],
                "costForTwo": 120000,
                "costForTwoString": "₹1200 FOR TWO",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "slaString": "22 MINS",
                "lastMileTravel": 0.5,
                "slugs": {
                    "restaurant": "cake-golden-city-center-city-center",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "300 AKSHANNSH COMPLEX KESHAV NAGAR, SHASTRI CIRCLE, ASHOK NAGAR, UDAIPUR,  Udaipur, Rajasthan- 313001",
                "locality": "City Center",
                "parentId": 21724,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "441048",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 0.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "2.1",
                "totalRatings": 20,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "182613",
                "name": "The cake wala",
                "uuid": "1d63c273-7b9f-4955-8582-6105a07f2213",
                "city": "42",
                "area": "Shobhagpura",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "es8b1zvmvwezinghvycv",
                "cuisines": [
                    "Bakery"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 17,
                "minDeliveryTime": 17,
                "maxDeliveryTime": 17,
                "slaString": "17 MINS",
                "lastMileTravel": 0.5,
                "slugs": {
                    "restaurant": "the-cake-wala-panchwati-panchwati",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "University main road down to Eden school, Udaipr",
                "locality": "Panchwati",
                "parentId": 206326,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "182613",
                    "deliveryTime": 17,
                    "minDeliveryTime": 17,
                    "maxDeliveryTime": 17,
                    "lastMileTravel": 0.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.0",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "82841",
                "name": "Mr & Mrs Idly",
                "uuid": "fb27afe6-adcc-425c-88f9-4a8a3db22cbd",
                "city": "42",
                "area": "Hiran Magri",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "fsrpg4aysgv1bc4ngnfg",
                "cuisines": [
                    "Pastas",
                    "Chinese",
                    "South Indian",
                    "Ice Cream",
                    "Pizzas",
                    "Biryani"
                ],
                "tags": [],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 2.5,
                "slugs": {
                    "restaurant": "mr-mrs-idly-mali-colony-panchwati",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "2, Rasbagh, 100 Feet Road, Mali Colony, Gayariawas, Central Area, City Centre, Udaipur",
                "locality": "Hiran Magri",
                "parentId": 388168,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                ],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5803234~p=13~eid=00000186-4935-a47a-381f-907d005a0d63",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "2.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "82841",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 2.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.0",
                "totalRatings": 5000,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "241691",
                "name": "De Pizzeria ( University Road )",
                "uuid": "e0f588e4-0050-4191-8691-938900908352",
                "city": "42",
                "area": "Hiran Magri",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "futmqo15xv9y0ghurxh8",
                "cuisines": [
                    "Pizzas",
                    "Burgers",
                    "Fast Food",
                    "Italian-American"
                ],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 0.5,
                "slugs": {
                    "restaurant": "de-pizzeria-(-hiran-magri)-hiran-magri-hiran-magri",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "Above Mahila Urban Bank, Opposite Bharat Glass University Main Road, Pahada, Udaipur",
                "locality": "Hiran Magri",
                "parentId": 69246,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                            "meta": "60% off | Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "60% off up to ₹120 | Use code TRYNEW",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "241691",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 0.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.4",
                "totalRatings": 500,
                "new": false
            },
            "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "112040",
                "name": "Navds yummy cafe (NYC PIZZA)",
                "uuid": "c37b0f44-31d6-4eb4-ada7-c6fefbc24bdb",
                "city": "42",
                "area": "Pahada",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "eozhk5k2lgmxddfqwpwq",
                "cuisines": [
                    "Pastas",
                    "Burgers",
                    "Pizzas"
                ],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "slaString": "22 MINS",
                "lastMileTravel": 0.5,
                "slugs": {
                    "restaurant": "navds-yummy-cafe-old-university-road-panchwati",
                    "city": "udaipur"
                },
                "cityState": "42",
                "address": "NEAR SBI ATM,NEAR 100FT, CORNER, University Rd, Keshav Nagar, Ayad, Pahada, Udaipur, Rajasthan",
                "locality": "Panchwati",
                "parentId": 144780,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                        {
                            "meta": "50% off | Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                        {
                            "meta": "Use WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                            "meta": "50% off up to ₹100 | Use code WELCOME50",
                            "discountType": "Percentage",
                            "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "112040",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 0.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.9",
                "totalRatings": 500,
                "new": false
            },
            "subtype": "basic"
        }
    ]

const RestraauntCard = ({ cloudinaryImageId, slugs, cuisines, slaString }) => {

    // const { cloudinaryImageId, slugs, cuisines, slaString } = restaurant.data
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
            <h2>{slugs.restaurant.split("-").slice(0, 2).join(" ")}</h2>
            <h3>{cuisines.slice(0, 2).join(",")}</h3>
            <h4>{slaString}</h4>
        </div>
    )
}

// let items = []
// for (let i = 0; i < kfcKing.length; i++) {
//     items.push(<RestraauntCard {...kfcKing[i].data} />)
// }

const Body = () => (

    <div className="restaurant-list">
        {/* <RestraauntCard {...kfcKing[0].data} />
        <RestraauntCard {...kfcKing[1].data} />
        <RestraauntCard {...kfcKing[2].data} />
        <RestraauntCard {...kfcKing[3].data} />
        <RestraauntCard {...kfcKing[4].data} />
        <RestraauntCard {...kfcKing[5].data} />
        <RestraauntCard {...kfcKing[6].data} />
        <RestraauntCard {...kfcKing[7].data} />
        <RestraauntCard {...kfcKing[8].data} />
        <RestraauntCard {...kfcKing[9].data} />
        <RestraauntCard {...kfcKing[10].data} />
        <RestraauntCard {...kfcKing[11].data} />
        <RestraauntCard {...kfcKing[12].data} />
        <RestraauntCard {...kfcKing[13].data} /> */}
        {
            kfcKing?.map(item => {
                return <RestraauntCard key={item.data.id} {...item.data} />
            })
        }
    </div>
)

const Footer = () => (
    <h4>Footer</h4>
)

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)