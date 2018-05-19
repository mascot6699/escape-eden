import path from 'path'
import ms from 'ms'
import _PACKAGE from './src/package.json'

export const ENV_DEV = process.env.NODE_ENV === 'development'
export const ENV_PROD = process.env.NODE_ENV === 'production'
export const ENV_BUILD_NAME = process.env.EXODUS_BUILD || ''
export const ENV_BUILD_EXODUS = ENV_BUILD_NAME === ''
export const ENV_BUILD_EDEN = ENV_BUILD_NAME === 'eden'

export const DUST_VALUES = {
  // it's actually 546, but in practical testing, some miners won't pick it up
  // if it's less than 5460, so we choose 6000 to be safe
  // bitcoin dust was increased because user can spend more to create a change
  // output than what the output is actually worth
  // 1 output will increase tx size by ~148 bytes, so dust is 148 * FEE_SAT/B
  // if 6000 is higher than 148 * FEE_SAT/B; use that instead
  // 2018-04-10 set fee to 20 sat/B here
  bitcoin: Math.max(6000, 148 * 20),
  bcash: 6000,

  // https://github.com/BTCGPU/BTCGPU/blob/d5522ed66a924a2d505fe45ed2487e741c6c0917/src/policy/policy.cpp#L18
  bgold: 6000,

  litecoin: 60000,
  dash: 5500,

  // Actual minimum amount is 60300 assuming P2PKH outputs, but we're setting it
  // higher since some nodes have a custom dust setting
  decred: 70000,

  // https://github.com/digibyte/digibyte/blob/3593b858681e61270a4a8a2539627926bca0ef3b/src/policy/policy.h#L49
  digibyte: 1000,

  // FIXME: use proper value...is it DUST_RELAY_TX_FEE?
  // https://github.com/qtumproject/qtum/blob/d78dd1b1d5412ec3dd52a721469e03f6af565efb/src/policy/policy.h#L48
  qtumignition: 400000,

  // Actual is 546; but we set higher to take into account fees for adding a change output
  vertcoin: 20000,

  // zcash
  // https://github.com/zcash/zcash/blob/v1.0.12/src/primitives/transaction.h#L269-L284
  // With default minRelayTxFee (100 satoshis per kilobyte), dust should be 54 satoshis
  // We will use higher value by default.
  // With current feePerKB (0.0001 ZEC) user need 10000 * 0.148 = 1480 satoshis for spending output.
  // This means that do not make sense set dust lower than 1480 sat.
  // Better pay extra satoshis to miners, than require from user in future pay for spending output.
  zcash: 1500
}

// This saves us in the event of the fee algorithm fucking up, it also alerts the user
// that their fees are crazy high (almost certainly because of mining contracts)
export const BITCOIN_FEE_LIMIT = 0.2 // units 'BTC'

export const PACKAGE = _PACKAGE

export const COMPANY = 'Exodus Movement, Inc.'

// Display name for the application we are running (Exodus or Eden)
export const EXODUS_DISPLAY_NAME = process.env.EXODUS_BUILD === 'eden' ? 'Eden' : 'Exodus'

// not running yet, but planned
export const EXODUS_LOCAL_SERVER = 'http://localhost:3020'
export const EXODUS_TESTING_SERVER = 'https://exodus-server-testing.azurewebsites.net'
export const EXODUS_PRODUCTION_SERVER = 'https://exodus-server.azurewebsites.net'
export const EXODUS_STAGING_SERVER = 'https://exodus-server-staging2.azurewebsites.net'
export const EXODUS_SERVER = EXODUS_PRODUCTION_SERVER
// export const EXODUS_SERVER = EXODUS_STAGING_SERVER
// export const EXODUS_SERVER = EXODUS_LOCAL_SERVER

export const EXODUS_EXCHANGE_LOCAL_SERVER = 'http://localhost:3021'
export const EXODUS_EXCHANGE_PRODUCTION_SERVER = 'https://exodus-exchange.azurewebsites.net'
export const EXODUS_EXCHANGE_STAGING_SERVER = 'https://exodus-exchange-staging.azurewebsites.net'
export const EXODUS_EXCHANGE_SERVER = 'https://exodus-exchange-eden.azurewebsites.net' // EXODUS_EXCHANGE_PRODUCTION_SERVER
// export const EXODUS_EXCHANGE_SERVER = EXODUS_EXCHANGE_STAGING_SERVER
// export const EXODUS_EXCHANGE_SERVER = EXODUS_EXCHANGE_LOCAL_SERVER

// hackety hack
// we must do this because browserify compiles these constants into src/main/index.js instead of calling them from src/config.js
const htmlPath = (file) => ENV_PROD
  ? path.join(__dirname, '..', '..', '..', 'static', file)
  : path.join(__dirname, 'static', file) + '?react_perf'

export const WINDOW_EXODUS = process.env.NODE_ENV === 'production'
  ? 'file://' + htmlPath('exodus-prod.html')
  : 'file://' + htmlPath('exodus-dev.html')

export const WINDOW_MNEMONIC = 'file://' + htmlPath('mnemonic.html')
export const WINDOW_NETWORK = 'file://' + htmlPath('network.html')
export const WINDOW_PASSPHRASE = 'file://' + htmlPath('passphrase.html')
export const WINDOW_WALLET = 'file://' + htmlPath('wallet.html')

const preloadPath = (proc: string) => ENV_PROD
  ? path.join(__dirname, '..', proc, 'preload.js')
  : path.join(__dirname, proc, 'preload.js')

export const WINDOW_PASSPHRASE_PRELOAD = preloadPath('passphrase')

export const AUTO_UPDATE_DELAY_INIT = 10000
export const AUTO_UPDATE_BASE_URL = ENV_BUILD_EDEN ? 'https://exodusbin.azureedge.net/releases/eden' : 'https://exodusbin.azureedge.net/releases'

// temporarily set for each release. Will remove when we have auto-updates
// always current release date (a Thursday, 10 PM PDT + 4 weeks + 82 hours)
const timeMs = (parseInt(process.env.NEW_VERSION_DATE) || Date.now()) + (4 * ms('168h') + ms('82h'))
export const NEW_VERSION_DATE = new Date(timeMs)
