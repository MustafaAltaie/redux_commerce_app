import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ['product', 'promoCode', 'homePage', 'homeSec2'],
    endpoints: (builder) => ({
        // Product CRUD
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
        }),
        // promo-code CRD
        createPromoCode: builder.mutation({
            query: (data) => ({ url: 'promoCode', method: 'POST', body: data }),
            invalidatesTags: ['promoCode']
        }),
        readPromoCode: builder.query({
            query: () => 'promoCode',
            providesTags: ['promoCode']
        }),
        findPromoCode: builder.query({
            query: (promoName) => ({ url: `promoCode/${promoName}` }),
            providesTags: ['promoCode']
        }),
        deletePromoCode: builder.mutation({
            query: (id) => ({ url: `promoCode/${id}`, method: 'DELETE' }),
            invalidatesTags: ['promoCode']
        }),
        sendContactEmail: builder.mutation({
            query: (data) => ({ url: 'email/send', method: 'POST', body: data }),
        }),
        // Dashboard password check
        checkPassword: builder.query({
            query: (password) => ({ url: `checkPassword/${password}` })
        }),
        // Home page
        updateHomePageList: builder.mutation({
            query: (homeSection1) => ({ url: 'homePage', method: 'PUT', body: homeSection1 }),
            invalidatesTags: ['homePage']
        }),
        readHomePageList: builder.query({
            query: () => 'homePage',
            providesTags: ['homePage']
        }),
        // Home page section2
        createSec2Card: builder.mutation({
            query: (data) => ({ url: 'homeSec2', method: 'POST', body: data }),
            invalidatesTags: ['homeSec2']
        }),
        readSec2Card: builder.query({
            query: () => 'homeSec2',
            providesTags: ['homeSec2']
        }),
        updateSec2Card: builder.mutation({
            query: ({ id, ...data }) => ({ url: `homeSec2/${id}`, method: 'PUT', body: data }),
            invalidatesTags: ['homeSec2']
        }),
    })
});

export const {
    useCreateProductMutation,
    useReadProductQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useArchiveProductMutation,
    useCreatePromoCodeMutation,
    useReadPromoCodeQuery,
    useDeletePromoCodeMutation,
    useFindPromoCodeQuery,
    useSendContactEmailMutation,
    useCheckPasswordQuery,
    useUpdateHomePageListMutation,
    useReadHomePageListQuery,
    useCreateSec2CardMutation,
    useReadSec2CardQuery,
    useUpdateSec2CardMutation
} = productApi;