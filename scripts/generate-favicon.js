import sharp from 'sharp';
import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const logoPath = join(rootDir, 'Media', 'Logo.jpeg');

// Favicon sizes to generate
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

async function generateFavicons() {
  try {
    console.log('🎨 Generating favicons from logo...');
    console.log(`📁 Source logo: ${logoPath}`);

    // Read the logo image
    const image = sharp(logoPath);
    const metadata = await image.metadata();
    console.log(`📐 Original image: ${metadata.width}x${metadata.height}`);

    // Generate all sizes
    const promises = sizes.map(async ({ size, name }) => {
      const outputPath = join(publicDir, name);
      await image
        .clone()
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✅ Generated: ${name} (${size}x${size})`);
    });

    await Promise.all(promises);

    // Generate favicon.ico (16x16 and 32x32 combined)
    const favicon16 = await image
      .clone()
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toBuffer();

    const favicon32 = await image
      .clone()
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toBuffer();

    // For favicon.ico, we'll create a simple 32x32 version
    // (Most modern browsers prefer PNG, but .ico is still widely used)
    await image
      .clone()
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(join(publicDir, 'favicon.ico'));

    console.log('✅ Generated: favicon.ico');

    // Generate apple-touch-icon (180x180)
    await image
      .clone()
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(join(publicDir, 'apple-touch-icon.png'));

    console.log('✅ Generated: apple-touch-icon.png (180x180)');

    // Generate site.webmanifest content
    const manifest = {
      name: 'Cherné Langeveldt Physiotherapy',
      short_name: 'Cherné Physio',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      theme_color: '#92a184',
      background_color: '#ffffff',
      display: 'standalone'
    };

    await writeFile(
      join(publicDir, 'site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );

    console.log('✅ Generated: site.webmanifest');

    console.log('\n🎉 All favicons generated successfully!');
    console.log('\n📋 Generated files:');
    console.log('   - favicon.ico');
    console.log('   - favicon-16x16.png');
    console.log('   - favicon-32x32.png');
    console.log('   - favicon-96x96.png');
    console.log('   - apple-touch-icon.png');
    console.log('   - android-chrome-192x192.png');
    console.log('   - android-chrome-512x512.png');
    console.log('   - site.webmanifest');

  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();

