(function (L) {
    function toQuadKey(x, y, z) {
        var index = ''
        for (var i = z; i > 0; i--) {
            var b = 0
            var mask = 1 << (i - 1)
            if ((x & mask) !== 0) b++
            if ((y & mask) !== 0) b += 2
            index += b.toString()
        }
        return index
    }
    var cnUrl = 'https://dynamic.t1.tiles.ditu.live.com/comp/ch/{quadkey}?mkt=zh-CN&ur=cn&it=G,TW,BX,L,LA&cstl=w4c';
    L.TileLayer.BingCN = L.TileLayer.extend({
        getTileUrl: function (coords) {
            var quadkey = toQuadKey(coords.x, coords.y, coords.z)
            return L.Util.template(this._url, {
                quadkey: quadkey
            });
        }
    })
    L.tileLayer.bingCN = function (url) {
        url = url || cnUrl;
        return new L.TileLayer.BingCN(url);
    }
})(L)