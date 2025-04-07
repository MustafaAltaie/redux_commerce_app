import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (data) => ({ url: 'product', method: 'POST', body: data }),
            invalidatesTags: ['product']
        }),
        readProduct: builder.query ({
            query: () => 'product',
            providesTags: ['product']
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...data }) => ({ url: `product/${id}`, method: 'PUT', body: data }),
            invalidatesTags: ['product']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({ url: `product/${id}`, method: 'DELETE' }),
            invalidatesTags: ['product']
        }),
        archiveProduct: builder.mutation({
            query: ({ id, isArchived }) => ({ url: `product/archive/${id}`, method: 'POST', body: { isArchived } }),
            invalidatesTags: ['product']
        })
    })
});

export const { useCreateProductMutation, useReadProductQuery, useUpdateProductMutation, useDeleteProductMutation, useArchiveProductMutation } = productApi;