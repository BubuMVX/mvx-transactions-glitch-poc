export const trimAddress = (address: string, limit: number = 8) => {
    return address.substring(0, limit) + '...' + address.substring(address.length - limit);
};
