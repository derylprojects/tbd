"use client"

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import XHeartAnimation from '../components/XHeartAnimation'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>PT Tahta Berkat Dunia | Premium Indonesian Spice Exporter</title>
        <meta name="description" content="We export all kinds of premium Indonesian spices worldwide. If it grows in Indonesia, we can deliver it to you." />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10">
              <XHeartAnimation size="small" />
            </div>
            <span className="font-bold text-xl text-gray-800">PT Tahta Berkat Dunia</span>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-800 hover:text-green-600 font-medium">Home</Link></li>
              <li><Link href="/products" className="text-gray-800 hover:text-green-600 font-medium">Products</Link></li>
              <li><Link href="/about" className="text-gray-800 hover:text-green-600 font-medium">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-green-600 font-medium">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gradient-to-b from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                <span className="inline-block">TBD</span>
                <span className="mx-4 inline-block text-green-600">me</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Premium Indonesian spice exporter. If it grows in Indonesia, we can deliver it to you with the highest quality and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
                  Our Products
                </button>
                <button className="bg-white hover:bg-gray-100 text-green-600 font-bold py-3 px-6 rounded-lg shadow-lg border border-green-600 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80">
                <XHeartAnimation size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Specialties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Premium Spices</h3>
              <p className="text-gray-700">
                We source and export the finest Indonesian spices including cinnamon, cloves, nutmeg, and more.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Global Reach</h3>
              <p className="text-gray-700">
                Our extensive logistics network ensures your orders arrive fresh and on time, anywhere in the world.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-green-700">Customized Service</h3>
              <p className="text-gray-700">
                We tailor our services to meet your specific requirements, from packaging to volume demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8">
                  <XHeartAnimation size="mini" inverse={true} />
                </div>
                <span className="font-bold text-lg">PT Tahta Berkat Dunia</span>
              </div>
              <p className="mt-2 text-gray-300">tahtaberkatdunia.me</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Products</h4>
                <ul className="space-y-2">
                  <li><Link href="/products/cinnamon" className="text-gray-300 hover:text-white">Cinnamon</Link></li>
                  <li><Link href="/products/cloves" className="text-gray-300 hover:text-white">Cloves</Link></li>
                  <li><Link href="/products/nutmeg" className="text-gray-300 hover:text-white">Nutmeg</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">info@tahtaberkatdunia.me</li>
                  <li className="text-gray-300">+62 123 456 7890</li>
                  <li className="text-gray-300">Jakarta, Indonesia</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PT Tahta Berkat Dunia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}