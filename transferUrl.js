  /**
     * Encodes a URL to a shortened URL.
     *
     * @param {string} longUrl
     * @return {string}
     */
     
    var url = {}
    var encode = function (longUrl) {
        let random = (Date.now() / 1000 >> 2).toString(36)
        url[random] = longUrl

        return 'http://tinyurl.com/' + random
    };
    
    /**
     * Decodes a shortened URL to its original URL.
     *
     * @param {string} shortUrl
     * @return {string}
     */
     
    var decode = function (shortUrl) {
        let long = shortUrl.split('com/')[1]
        return url[long]
    };
    
    /**
     * Your functions will be called as such:
     * decode(encode(url));
     */
