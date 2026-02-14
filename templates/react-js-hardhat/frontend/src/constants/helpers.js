export const CONTRACTS = {
    testnet: "0x0000000000000000000000000000000000000000"
  }
  
  export const getContractAddress = (network) => CONTRACTS[network];
  
  export const shortenAddress = (address, length = 4) => {
      if (typeof address !== "string" || address.length <= 2 * length) {
          return address;
      }
      return `${address.slice(0, length)}...${address.slice(-length)}`;
  };
  
  // Helper function to properly interpret signed 256-bit integers
  export const parseSignedBigInt = (value) => {
      // Check if the number is negative (MSB is 1)
      const isNegative = value > BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      
      if (isNegative) {
        // Convert to two's complement negative representation
        const mask = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
        const negativeValue = -((~value & mask) + BigInt(1));
        return negativeValue.toString();
      }
      return value.toString();
  }