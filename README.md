# gOcto Forge 🚀

**The Ultimate Pharos DApp Scaffolding Tool**

gOcto Forge is a comprehensive development toolkit designed to accelerate Pharos DApp development. It provides pre-configured templates with modern web technologies and blockchain development tools, making it easy to build, test, and deploy decentralized applications on the Pharos Smart Chain.

## 🌟 Features

- **Multiple Framework Support**: Choose between Next.js and React
- **TypeScript & JavaScript**: Full TypeScript support with optional JavaScript templates
- **Blockchain Development Tools**: Integrated Hardhat and Foundry support
- **Modern Web Stack**: Latest versions of React, Next.js, Tailwind CSS, and more
- **Wallet Integration**: Built-in Wagmi and Viem for seamless wallet connectivity
- **Pharos Optimized**: Pre-configured for Pharos Atlantic Testnet
- **Interactive CLI**: Beautiful command-line interface with arrow key navigation
- **Production Ready**: Includes testing, linting, and deployment configurations

## 📋 Prerequisites

Before using gocto-forge, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

For blockchain development:
- **Hardhat** (automatically installed with templates)
- **Foundry** (for Foundry-based templates)

## 🚀 Quick Start

### Create a New DApp

### Using npx (Recommended)

```sh
npx gocto-forge <app name>
```

### Interactive Setup

The CLI will guide you through the setup process:

1. **Choose Language**: TypeScript (recommended) or JavaScript
2. **Select Framework**: Next.js (recommended) or React
3. **Pick Development Environment**: Hardhat (recommended) or Foundry

### Example Usage

```bash
# Create a Next.js + TypeScript + Hardhat project
npx gocto-forge my-nextjs-dapp

# The CLI will automatically:
# ✅ Copy template files
# ✅ Initialize Git repository
# ✅ Install dependencies
# ✅ Set up project structure
```

## 📁 Project Structure

Each generated project follows a monorepo structure:

```
my-dapp/
├── frontend/                 # Web application
│   ├── app/                 # Next.js app directory (or src/ for React)
│   ├── components/          # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── constants/          # Contract ABIs and helpers
│   ├── modals/             # Modal components
│   └── package.json        # Frontend dependencies
├── smart-contract/         # Blockchain development
│   ├── contracts/          # Solidity smart contracts
│   ├── test/              # Contract tests
│   ├── scripts/           # Deployment scripts
│   └── package.json       # Smart contract dependencies
└── package.json           # Root workspace configuration
```

## 🛠 Available Templates

### Next.js Templates

| Template | Language | Blockchain Tool | Description |
|----------|----------|-----------------|-------------|
| `next-ts-hardhat` | TypeScript | Hardhat | Next.js with TypeScript and Hardhat (Recommended) |
| `next-js-hardhat` | JavaScript | Hardhat | Next.js with JavaScript and Hardhat |
| `next-ts-foundry` | TypeScript | Foundry | Next.js with TypeScript and Foundry |
| `next-js-foundry` | JavaScript | Foundry | Next.js with JavaScript and Foundry |

### React Templates

| Template | Language | Blockchain Tool | Description |
|----------|----------|-----------------|-------------|
| `react-ts-hardhat` | TypeScript | Hardhat | React with TypeScript and Hardhat |
| `react-js-hardhat` | JavaScript | Hardhat | React with JavaScript and Hardhat |
| `react-ts-foundry` | TypeScript | Foundry | React with TypeScript and Foundry |
| `react-js-foundry` | JavaScript | Foundry | React with JavaScript and Foundry |

## 🎯 What's Included

### Frontend Features

- **Modern UI Framework**: Next.js 15 or React 19
- **Styling**: Tailwind CSS v4 with dark mode support
- **Type Safety**: Full TypeScript support
- **State Management**: TanStack Query for server state
- **Wallet Integration**: Wagmi + Viem for blockchain interactions
- **Component Library**: Pre-built components for common DApp patterns
- **Responsive Design**: Mobile-first responsive layouts
- **Error Handling**: Comprehensive error states and loading indicators

### Smart Contract Features

- **Development Environment**: Hardhat or Foundry
- **Sample Contract**: Counter contract with full CRUD operations
- **Testing Framework**: Comprehensive test suite
- **Deployment Scripts**: Automated deployment to Pharos networks
- **Type Generation**: Automatic TypeScript types from contracts
- **Gas Optimization**: Built-in gas reporting and optimization

### Development Tools

- **ESLint**: Code linting and formatting
- **TypeScript**: Static type checking
- **Hot Reloading**: Fast development with hot module replacement
- **Environment Configuration**: Easy environment variable management
- **Git Integration**: Pre-configured Git hooks and workflows

## 🔧 Development Commands

### Root Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Smart Contract Commands

#### Hardhat Templates

```bash
# Start local Hardhat node
npm run hardhat

# Compile contracts
npm run compile

# Run tests
npm run test

# Deploy contracts
npx hardhat run scripts/deploy.js --network <network>
```

#### Foundry Templates

```bash
# Build contracts
npm run compile

# Run tests
npm run test

# Start local Anvil node
anvil

# Deploy contracts
forge script script/Counter.s.sol:CounterScript --rpc-url <rpc_url> --private-key <private_key>
```

## 🌐 Pharos Network Configuration

### Network Details

| Property | Value |
|----------|-------|
| Name | Pharos Atlantic Testnet |
| Chain ID | 688689 |
| RPC Public Endpoint | `https://atlantic.dplabs-internal.com` |
| WSS Public Endpoint | `wss://atlantic.dplabs-internal.com` |
| Explorer | `https://atlantic.pharosscan.xyz/` |
| Environment | Atlantic Testnet |
| Ratelimit | 500 times/5m |
| Max Pending TXs (Addr) | 64 |

### Environment Variables

Create a `.env` file in your project root:

```env
# Private key for deployment (keep secure!)
PRIVATE_KEY=your_private_key_here
```

## 📱 Sample DApp Features

Each template includes a fully functional counter DApp that demonstrates:

- **Wallet Connection**: Connect to MetaMask or other Web3 wallets
- **Contract Interaction**: Read and write to smart contracts
- **Transaction Handling**: Complete transaction flow with status updates
- **Error Handling**: Graceful error states and user feedback
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode**: Automatic dark/light theme switching

### Counter Contract Functions

- `getCount()`: Read current counter value
- `increment()`: Increase counter by 1
- `decrement()`: Decrease counter by 1
- `reset()`: Reset counter to 0

## 🚀 Deployment

### Frontend Deployment

#### Vercel (Recommended for Next.js)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify (For React apps)

```bash
# Build the project
npm run build

# Deploy to Netlify
# Upload the dist/ folder to Netlify
```

### Smart Contract Deployment

#### Hardhat Deployment

```bash
# Deploy to Pharos Atlantic Testnet
npx hardhat run scripts/deploy.js --network pharos-testnet
```

#### Foundry Deployment

```bash
# Deploy to Pharos Atlantic Testnet
forge script script/Counter.s.sol:CounterScript --rpc-url https://atlantic.dplabs-internal.com --private-key ${PRIVATE_KEY} --broadcast
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Network Connection Issues

```bash
# Verify network configuration in hardhat.config.ts or foundry.toml
# Ensure RPC endpoint https://atlantic.dplabs-internal.com is accessible
```

#### 2. Contract Deployment Fails

```bash
# Ensure you have sufficient PHRS for gas fees
# Check your private key is correct
# Verify network RPC endpoint is accessible
```

#### 3. Frontend Build Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npx tsc --noEmit
```

#### 4. Wallet Connection Issues

```bash
# Ensure MetaMask is installed and unlocked
# Check if you're on the correct network (Pharos Atlantic Testnet)
# Clear browser cache and try again
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/DevBigEazi/gocto-forge.git
cd gocto-forge

# Install dependencies
npm install

# Link the package locally
npm link

# Test the CLI
npx etn-dapp test-project
```
## 📞 Support

- **Documentation**: [https://developer.Pharos.com](https://developer.Pharos.com)
- **GitHub Issues**: [Report bugs here](https://github.com/devbigeazi/gocto-forge/issues)

---

**Built with ❤️ for Pharos Developer Community**

*gocto-forge - Empowering developers to build the future of decentralized applications on Pharos.*

## 🔗 Useful Links

- [Pharos Docs](https://developer.Pharos.com/)
- [Viem Docs](https://viem.sh/docs/getting-started)
- [Wagmi Docs](https://wagmi.sh/react/getting-started)
- [Foundry Book](https://book.getfoundry.sh/)
- [Hardhat Docs](https://hardhat.org/getting-started/)
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TanStack Query Docs](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Ethers.js Docs](https://docs.ethers.org/v6/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Node.js Docs](https://nodejs.org)