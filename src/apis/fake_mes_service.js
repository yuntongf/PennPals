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
        liked : false,
        read: false,
        deleted : false,
    },

    {
        _id: 1,
        user: "August",
        author: "Apple",
        title: "Saying Hi",
        content: "Hi I'm Apple",
        likes: 0,
        reported: false,
        liked : true,
        read: false,
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
        liked : false,
        read: false,
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
        liked : true,
        read: false,
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
        liked : false,
        read: true,
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
        liked : false,
        read: true,
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
        liked : false,
        read: false,
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
        liked : false,
        read: false,
        deleted : false
    }


]

export function getMessages() {
    return messages;
}


