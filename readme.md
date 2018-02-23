<h1 align="center">
	<img width="650" src="https://nikolaskama.me/content/images/2018/02/btc-balance.png" alt="BTC-Balance.Now">
</h1>

<p align="center">A minimal service to check the balance of a Bitcoin (BTC) address.</p>

---

<p align="center">
	<sub>Visit <a href="https://btc-balance.now.sh"><code>btc-balance.now.sh</code></a> for a live demo. Check out my <a href="https://nikolaskama.me">blog</a> and follow me on <a href="https://twitter.com/nikolaskama">Twitter</a>.</sub>
</p>


<br>

# Installation & Configuration
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fk4m4%2Fbtc-balance.now.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fk4m4%2Fbtc-balance.now?ref=badge_shield)


Clone the repository and install all dependencies by running:

```
~ ❯❯❯ git clone https://github.com/k4m4/btc-balance.now
~ ❯❯❯ cd btc-balance.now/
~/btc-balance.now ❯❯❯ npm install
```

Subsequently, create a `.env` file and declare a variable called `SECRET` (for session security purposes):

```
~/btc-balance.now ❯❯❯ echo "SECRET=[your-secret-goes-here]" > .env
~/btc-balance.now ❯❯❯ npm start
```

You can then access the service by navigating to [`localhost:3000`](http://localhost:3000/).


<br>

# Deployment

First, [download `now`](https://zeit.co/download):

```
~ ❯❯❯ npm install -g now
```

Then, run `now` from *within* the directory of `BTC-Balance.Now`:

```
~/btc-balance.now ❯❯❯ now
```

<br>

# Credits
- `BTC-Balance.Now` uses [blockain.info](https://www.blockchain.com/)'s [Query API](https://blockchain.info/q) to fetch the balance of an address.
- It was developed as part of my Node.js learning experience. I have uploaded the code with the intention of helping out others who are also trying to learn the node environment.
- Most of the styling was adapted from [Evil Rabbit](https://twitter.com/evilrabbit_)'s [front site](https://github.com/evilrabbit/front).


<br>

# License

Copyright (c) 2018 by Nikolaos Kamarinakis. Some rights reserved.

`BTC-Balance.Now` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).

For more information on this project you can go ahead and email me anytime at **nikolaskam{at}gmail{dot}com**.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fk4m4%2Fbtc-balance.now.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fk4m4%2Fbtc-balance.now?ref=badge_large)