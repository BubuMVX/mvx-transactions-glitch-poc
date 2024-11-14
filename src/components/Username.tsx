import { trimUsernameDomain } from '@multiversx/sdk-dapp/hooks/account/helpers';
import type { AccountType } from '@multiversx/sdk-dapp/types';
import { trimAddress } from '../utils/trimAddress.tsx';

export const Username = (props: {
    account: AccountType
}) => {
    const { account } = props;

    if (account.username) {
        const username = trimUsernameDomain(account.username);

        if (username) {
            return username;
        }
    }

    return trimAddress(account.address);
};
