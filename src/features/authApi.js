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
                    headers : {
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            }
        }),

        editProfile : builder.mutation({
            query : ({profile, username})=>{
                return{
                    url : `/api/edit-profile-pic/`,
                    method : "PUT",
                    body : {profile},
                    params : {username},
                    headers : {
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            }
        })
    })
});

export const {useLoginUserMutation, useRegisterUserMutation, useEditProfileMutation} = authApi; 