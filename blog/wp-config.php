<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ueyeBlog' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Df):Y&c8aNfJo1[N<m7rph[sV(m8]6&@4]#*0-.);Gma5Cf{cn,&QzjpHb S!d`u' );
define( 'SECURE_AUTH_KEY',  'K^@ojT.mpGGY!b7Y;m%%2-D8C^@Yfob6sT#@JbG3D=W-raZazHMaOwG+bLma~EtY' );
define( 'LOGGED_IN_KEY',    'GFvEPM#z22`+7iSXTH?ob{b7ur~o^*vV>txEcnKH!,IN^-LgNyUXCh5{,%)6]_k+' );
define( 'NONCE_KEY',        '(9{dEi@8&*8$pBEFm(*J)kQMDE-K3|S1 X?>^whz=6W%4[aXi>GN@yg>z%i!@WZ$' );
define( 'AUTH_SALT',        'VqI=J:/A$g&owiAj3Z_nd+ <)N6w*@d W*_?$-{5+qOtLMq71.Xz4,,`VgH+/SlK' );
define( 'SECURE_AUTH_SALT', '4TZ&$z.FQeK.L2p4$qWt$_oSO3^+d2V(hwqXRgf~+XH}mNM*`.KN%#I>~FY>q%@;' );
define( 'LOGGED_IN_SALT',   'Z{ous*JaTvP;$6yCJj/H#E->mbt2q!k+*>0fDziJ~^SfBV^K$^zU<hxyd.aKF&=i' );
define( 'NONCE_SALT',       '!`5N;iPWeS|l%_&>kLe%A[1>>+>BpB/h>?+Nbt)x&bRiwTvWC*3Kqr+-d#_7 !CM' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
