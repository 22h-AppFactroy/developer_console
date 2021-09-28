<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dgtk77' );

/** MySQL database username */
define( 'DB_USER', 'dgtk77' );

/** MySQL database password */
define( 'DB_PASSWORD', 'ekdekd77++' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'MjRK%bP1SD/wiaUnmHuSqTUd5gXhXNntv^U-~-y-k_Vw?wx^btP<YmMmOEK0-Ptm' );
define( 'SECURE_AUTH_KEY',  'YmG.+dFjvHcs&%YxoF0.g:2`1`AQ%wi!)fUZ2ODJa B!8)*yhtgp};Bb]P_ZN>V&' );
define( 'LOGGED_IN_KEY',    'FymBu5hvGG2aH: QqkQB11Iq8W6uzMdaJGysa3AlS7U^jMt*+,>|Krg.AXo~44)m' );
define( 'NONCE_KEY',        'p4b$yHZ|vGA*DdA6Ix&4<V?&Aq}]TDo6em&a.3gn`l_61s}%r<I:&S02+FSe^:H(' );
define( 'AUTH_SALT',        '}<<gz^]DeuWU*Is+K~OuA/*odi!/4|6MpAy@;trZLqgyT)mp|NZIEO99@x,czO81' );
define( 'SECURE_AUTH_SALT', 'FoG19;}$1[k`;SCazL$P_-cd`;y0xg:Iwv8m3R8NVrza)bW4<j:m<,/5RP^<HIB{' );
define( 'LOGGED_IN_SALT',   'M,_MUDZ#c*zIVY.kXwHJIFsBIyMa /nj&ZA<>M2lM_RZ;BuC$W@fUHE!]vN_e^d.' );
define( 'NONCE_SALT',       'U0v.fnc76EP-ym7[H4nE+[5`+7cI4g_#hm,Lbhq@`uB3cfV+?BfU+gz/62|d11?w' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/* disble core major update */
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* custom security setting */
define('DISALLOW_FILE_EDIT',false);
define('WP_POST_REVISIONS',7);
define('IMAGE_EDIT_OVERWRITE',true);
define('DISABLE_WP_CRON',true);
define('EMPTY_TRASH_DAYS',7);
