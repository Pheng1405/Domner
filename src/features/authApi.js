import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath : "ticketApi",
    baseQuery   : fetchBaseQuery({
        baseUrl : "https://domner-server.onrender.com"
    }),
    endpoints   : (builder) =>({
        loginUser : builder.mutation({
            query : ({email , password})=>{
                return{
                    url : "/api/login",
                    method : "post",
                    body : {email , password},
                }
            }
        }),

        registerUser : builder.mutation({
            query : ({username,email , password, profile})=>{
                return{
                    url : "/api/register",
                    method : "post",
                    body : {username, email , password, profile},
                }
            }
        }),
    })
});

export const {useLoginUserMutation, useRegisterUserMutation} = authApi; 