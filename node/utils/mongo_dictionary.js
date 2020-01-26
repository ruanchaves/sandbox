export default function MongoDictionary(data) {
    let data_object = data || {};
    let dictionary = new Proxy(data_object, {
        get(target, query) {
            return { key: query, value: target[query] }
        }
    });
    return dictionary;
}