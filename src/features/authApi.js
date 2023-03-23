import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const {Token} = require("../data/Token");

export const authApi = createApi({
    reducerPath : "ticketApi",
    baseQuery   : fetchBaseQuery({
        // baseUrl : "https://domner-server.onrender.com"
        baseUrl : "http://localhost:8080"
    }),
    endpoints   : (builder) =>({


        loginUser : builder.mutation({
            query : ({email , password})=>{
                return{
                    url : "/api/user/login",
                    method : "post",
                    body : {email , password},
                }
            }
        }),

        registerUser : builder.mutation({
            query : ({username,email , password, profile})=>{
                return{
                    url : "/api/user/register",
                    method : "post",
                    body : {username, email , password, profile},
                    headers : {
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            }
        }),

        editProfile : builder.mutation(
            
            {
            query : ({profile, email})=>{
                return{
                    url : `/api/user/updateProfile`,
                    method : "PUT",
                    body : {profile, email},
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'authorization' : `Bearer ${JSON.parse(localStorage.getItem("access-token")).token}`,

                    }
                }
            }
        })
    })
});

export const {useLoginUserMutation, useRegisterUserMutation, useEditProfileMutation} = authApi; 