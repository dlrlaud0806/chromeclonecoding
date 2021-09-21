const quotes = [
    { main: "하지만 우리가 빛의 속도로 갈 수조차 없다면, 같은 우주라는 개념이 대체 무슨 의미가 있나?",
        sub: "  - 우리가 빛의 속도로 갈 수 없다면",
    },
    { main: "I've had lots of troubles, so I write jolly tales.",
    sub: "  - Louisa May Alcott",
    },
    { main: "Chess isn't always competitive. Chess can also be beautiful.",
    sub: "  - Queen's Gambit, Halmon",
    },
    { main: "My experience has taught me what you know isn't always what's important.",
    sub: "  - Queen's Gambit, Alma",
    },
    { main: "The strongest person is the person who isn't scared to be alone.",
    sub: "  - Queen's Gambit, Alice",
    },
    { main: "If you don't like it, You change it.",
    sub: "  - Miss Sloane",
    },
    { main: "Suddenly, time travel seems almost unnecessary, because every detail of life is so delightful.",
    sub: "  - About time",
    },
    { main: "We are all traveling through ime together, everyday of our lives. all we can do is do our best to relish this remarkable ride.",
    sub: "  - About time",
    }
]
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.main;
author.innerText = todaysQuote.sub;