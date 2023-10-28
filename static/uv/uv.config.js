self.__uv$config = {
    prefix: '/search/proxy/',
    bare: 'https://phantomnetwork.cloud/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/search/uv/uv.handler.js',
    bundle: '/search/uv/uv.bundle.js',
    config: '/search/uv/uv.config.js',
    sw: '/search/uv/uv.sw.js',
};
