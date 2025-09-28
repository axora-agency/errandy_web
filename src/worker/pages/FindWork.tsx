import React from 'react';
import { Search, MapPin, Filter, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Errand {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  budget: string;
  duration: string;
  postedTime: string;
  urgency: 'low' | 'medium' | 'high';
  clientRating: number;
  clientName: string;
}

const mockErrands: Errand[] = [
  {
    id: '1',
    title: 'Grocery Shopping and Delivery',
    description: 'Need someone to shop for groceries from a provided list and deliver to my apartment. Must be careful with fragile items.',
    category: 'Shopping & Delivery',
    location: 'Downtown, Lagos',
    budget: '₦5,000 - ₦8,000',
    duration: '2-3 hours',
    postedTime: '2 hours ago',
    urgency: 'medium',
    clientRating: 4.8,
    clientName: 'Sarah M.'
  },
  {
    id: '2',
    title: 'Office Document Pickup',
    description: 'Quick pickup of documents from law office on Victoria Island. Must be done today before 5 PM.',
    category: 'Pickup & Delivery',
    location: 'Victoria Island, Lagos',
    budget: '₦3,000 - ₦4,000',
    duration: '1 hour',
    postedTime: '30 minutes ago',
    urgency: 'high',
    clientRating: 4.9,
    clientName: 'John D.'
  },
  {
    id: '3',
    title: 'Pet Walking Service',
    description: 'Need someone to walk my two dogs for 30 minutes in the evening. Dogs are friendly and well-trained.',
    category: 'Pet Services',
    location: 'Lekki, Lagos',
    budget: '₦2,500 - ₦3,500',
    duration: '30 minutes',
    postedTime: '1 day ago',
    urgency: 'low',
    clientRating: 4.7,
    clientName: 'Mary K.'
  }
];

const FindWorkPage: React.FC = () => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Find Work</h1>
          <p className="text-gray-600 mt-1">Discover errands that match your skills and location</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            {mockErrands.length} Available Errands
          </Badge>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search errands by title, description, or category..."
                className="pl-10"
              />
            </div>

            {/* Location */}
            <div className="relative min-w-[200px]">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Location"
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select>
              <SelectTrigger className="min-w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="shopping">Shopping & Delivery</SelectItem>
                <SelectItem value="pickup">Pickup & Delivery</SelectItem>
                <SelectItem value="pets">Pet Services</SelectItem>
                <SelectItem value="cleaning">Cleaning</SelectItem>
                <SelectItem value="maintenance">Home Maintenance</SelectItem>
              </SelectContent>
            </Select>

            {/* Advanced Filters */}
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Errands List */}
      <div className="grid gap-4">
        {mockErrands.map((errand) => (
          <Card key={errand.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{errand.title}</CardTitle>
                    <Badge className={getUrgencyColor(errand.urgency)} variant="secondary">
                      {errand.urgency} priority
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{errand.description}</p>

                  {/* Client Info */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">{errand.clientName}</span>
                    <div className="flex items-center gap-1">
                      {renderStars(errand.clientRating)}
                      <span className="text-sm text-gray-600 ml-1">({errand.clientRating})</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-green-600 mb-1">{errand.budget}</div>
                  <div className="text-sm text-gray-500">{errand.postedTime}</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {errand.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {errand.duration}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {errand.category}
                  </Badge>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                  <Button size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-4">
        <Button variant="outline" className="px-8">
          Load More Errands
        </Button>
      </div>
    </div>
  );
};

export default FindWorkPage;