import React, { Component } from 'react';

const messages = [
    {
        _id: 0,
        user: "August",
        author: "Apple",
        title: "Saying Hi",
        content: "Hi I'm Apple",
        likes: 9,
        reported: false,
        isClickedLike : false,
        isClickedContent: false,
        deleted : false
    },

    {
        _id: 1,
        user: "August",
        author: "Apple",
        title: "Saying Hi",
        content: "Hi I'm Apple",
        likes: 0,
        reported: false,
        isClickedLike : true,
        isClickedContent: false,
        deleted : false
    },

    {
        _id: 2,
        user: "Beck",
        author: "Banana",
        title: "Also Saying Hi",
        content: "Hi I'm Banana",
        likes: 1,
        reported: true,
        isClickedLike : false,
        isClickedContent: false,
        deleted : false
    },

    {
        _id: 3,
        user: "Cathy",
        author: "Carrot",
        title: "Saying Hi!",
        content: "Hi I'm Carrot",
        likes: 6,
        reported: false,
        isClickedLike : true,
        isClickedContent: false,
        deleted : false
    },

    {
        _id: 4,
        user: "Cathy",
        author: "Carrot",
        title: "Saying Hi!",
        content: "Hi I'm Carrot",
        likes: 6,
        reported: false,
        isClickedLike : false,
        isClickedContent: true,
        deleted : false
    },

    {
        _id: 5,
        user: "Cathy",
        author: "Carrot",
        title: "Saying Hi!",
        content: "Hi I'm Carrot",
        likes: 6,
        reported: false,
        isClickedLike : false,
        isClickedContent: true,
        deleted : false
    },

    {
        _id: 6,
        user: "August",
        author: "Apple",
        title: "Saying Hi",
        content: "Hi I'm Apple",
        likes: 9,
        reported: false,
        isClickedLike : false,
        isClickedContent: false,
        deleted : false
    },

    {
        _id: 7,
        user: "August",
        author: "Apple",
        title: "Saying Hi",
        content: "Hi I'm Apple",
        likes: 9,
        reported: false,
        isClickedLike : false,
        isClickedContent: false,
        deleted : false
    }


]

export function getMessages() {
    return messages;
}

async function getMessage(id) {
    setTimeout(() => {
        const mes = messages.filter(message => message._id === id);
        return mes.content;
    }, 4000)
}
