'use client';

import React, { useState } from 'react';
import { PlaceholderImage } from '@/components/ui/placeholder-image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/cards/card';
import { Button } from '@/components/ui/buttons/button';
import { Icon } from '@/components/ui/icon';

export default function PlaceholderImageDemo() {
  const [service, setService] = useState<'picsum' | 'placeholder'>('picsum');
  const [refreshKey, setRefreshKey] = useState(0);
  const [grayscale, setGrayscale] = useState(false);
  const [customText, setCustomText] = useState('');
  const [bgColor, setBgColor] = useState('1f1f1f');
  const [textColor, setTextColor] = useState('ffffff');

  // Refresh the images
  const refreshImages = () => {
    setRefreshKey(prev => prev + 1);
  };

  // Toggle between services
  const toggleService = () => {
    setService(prev => prev === 'picsum' ? 'placeholder' : 'picsum');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Dynamic Placeholder Images</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Easily integrate responsive placeholder images with customizable options
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Button
            onClick={toggleService}
            variant="outline"
          >
            <Icon
              name={service === 'picsum' ? 'IconPhoto' : 'IconLetterP'}
              className="mr-2"
              size={18}
            />
            Using: {service === 'picsum' ? 'Picsum.photos' : 'Placeholder.com'}
          </Button>

          <Button
            onClick={refreshImages}
            variant="outline"
          >
            <Icon name="IconRefresh" className="mr-2" size={18} />
            Refresh Images
          </Button>

          {service === 'picsum' && (
            <Button
              onClick={() => setGrayscale(prev => !prev)}
              variant={grayscale ? 'default' : 'outline'}
            >
              <Icon name="IconAdjustments" className="mr-2" size={18} />
              {grayscale ? 'Grayscale On' : 'Grayscale Off'}
            </Button>
          )}
        </div>

        {service === 'placeholder' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Custom Text</label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Custom text for placeholder"
                className="w-full p-2 rounded-md bg-background border border-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Background Color</label>
              <div className="flex items-center">
                <input
                  aria-label="Background color picker"
                  title="Choose background color"
                  type="color"
                  value={`#${bgColor}`}
                  onChange={(e) => setBgColor(e.target.value.replace('#', ''))}
                  className="w-10 h-10 rounded-md mr-2"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value.replace('#', ''))}
                  placeholder="Background color (hex)"
                  className="w-full p-2 rounded-md bg-background border border-input"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Text Color</label>
              <div className="flex items-center">
                <input
                  type="color"
                  value={`#${textColor}`}
                  onChange={(e) => setTextColor(e.target.value.replace('#', ''))}
                  className="w-10 h-10 rounded-md mr-2"
                  aria-label="Text color picker"
                  title="Choose text color"
                />
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value.replace('#', ''))}
                  placeholder="Text color (hex)"
                  className="w-full p-2 rounded-md bg-background border border-input"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Square placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Square Placeholder</CardTitle>
            <CardDescription>300×300 pixels</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <PlaceholderImage
              key={`square-${refreshKey}`}
              width={300}
              height={300}
              service={service}
              text={customText || undefined}
              bgColor={bgColor}
              textColor={textColor}
              category={grayscale ? 'grayscale' : undefined}
              className="rounded-md"
            />
          </CardContent>
          <CardFooter>
            <code className="text-xs w-full overflow-x-auto p-2 bg-muted rounded-md">
              {`<PlaceholderImage width={300} height={300} service="${service}" />`}
            </code>
          </CardFooter>
        </Card>

        {/* Landscape placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Landscape Placeholder</CardTitle>
            <CardDescription>400×225 pixels (16:9)</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <PlaceholderImage
              key={`landscape-${refreshKey}`}
              width={400}
              height={225}
              service={service}
              text={customText || undefined}
              bgColor={bgColor}
              textColor={textColor}
              category={grayscale ? 'grayscale' : undefined}
              className="rounded-md"
            />
          </CardContent>
          <CardFooter>
            <code className="text-xs w-full overflow-x-auto p-2 bg-muted rounded-md">
              {`<PlaceholderImage width={400} height={225} service="${service}" />`}
            </code>
          </CardFooter>
        </Card>

        {/* Portrait placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Portrait Placeholder</CardTitle>
            <CardDescription>225×400 pixels (9:16)</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <PlaceholderImage
              key={`portrait-${refreshKey}`}
              width={225}
              height={400}
              service={service}
              text={customText || undefined}
              bgColor={bgColor}
              textColor={textColor}
              category={grayscale ? 'grayscale' : undefined}
              className="rounded-md"
            />
          </CardContent>
          <CardFooter>
            <code className="text-xs w-full overflow-x-auto p-2 bg-muted rounded-md">
              {`<PlaceholderImage width={225} height={400} service="${service}" />`}
            </code>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
