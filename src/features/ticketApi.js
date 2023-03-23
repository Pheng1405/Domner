import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ticketApi = createApi({
    reducerPath : "ticketApi",
    baseQuery   : fetchBaseQuery({baseUrl : "http://localhost:8080/"}),
    endpoints   : (builder) =>({
        getAllTicket : builder.query({
            // query : (page, sortData, sortType, limit)=>`api/tours?sortData=${sortData}&sortType=${sortType}&page=${page}&limit=${limit}`,
            query : (params) => `/api/tours?search=${params.search}&page=${params.page}&province=${params.queryProvince}&limit=8`
        }),

        getTicket : builder.query({
            query : (id)=>`api/tour/${id}`,
        })
    })
});

export const {useGetAllTicketQuery, useGetTicketQuery} = ticketApi; 