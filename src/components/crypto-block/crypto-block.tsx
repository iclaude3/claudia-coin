import { SHA256 } from 'crypto-js'
import { Hash } from 'node:crypto'
import React, { FC } from 'react'
// import sha256 from 'crypto-js/sha256';

interface CryptoBlockProps {
    index: string;
    timestamp: string;
    data: any;
    precedingHash: Hash;
}

export const CryptoBlock: FC<CryptoBlockProps> = ({index, timestamp, data, precedingHash}) => {    
    const [hash, setHash] = React.useState<string>()

    React.useEffect(() => {
        setHash(computeHash())
    }, [])

    const computeHash = (): string => {
        return SHA256(index + precedingHash + timestamp + JSON.stringify(data)).toString()
    }

    return (
        <div></div>
    )
}