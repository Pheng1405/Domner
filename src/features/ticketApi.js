import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ticketApi = createApi({
    reducerPath : "ticketApi",
    baseQuery   : fetchBaseQuery({baseUrl : "https://domner-server.onrender.com"}),
    endpoints   : (builder) =>({
        getAllTicket : builder.query({
            query : ()=>"api/popular",
        }),

        getTicket : builder.query({
            query : (id)=>`api/popular/${id}`,
        })
    })
});

export const {useGetAllTicketQuery, useGetTicketQuery} = ticketApi; 