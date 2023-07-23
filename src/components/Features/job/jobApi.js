import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postJob: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/job',
                body: data
            }),
        }),
        apply: builder.mutation({
            query: (data) => ({
                method: 'PATCH',
                url: '/apply',
                body: data
            }),
        }),
        sendQuestion: builder.mutation({
            query : (data) => ({
                method: 'PATCH',
                url: '/question',
                body: data
            }),
            invalidatesTags: ["Job"]
        }),
        reply: builder.mutation({
            query: (data) => ({
                method: 'PATCH',
                url: '/reply',
                body: data
            }),
            invalidatesTags: ["Job"]
        }),
        getJobs: builder.query({
            query: () => ({
                url: '/jobs',
            }),
        }),
        appliedJobs: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`,
            }),
        }),
        jobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
            }),
            providesTags: ["Job"]
        }),
        
    }),
})

export const {usePostJobMutation, useGetJobsQuery, useJobByIdQuery, useApplyMutation, useAppliedJobsQuery, useSendQuestionMutation, useReplyMutation} = jobApi;