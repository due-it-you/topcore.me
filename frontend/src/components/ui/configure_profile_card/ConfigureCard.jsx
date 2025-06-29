import GridRowsColumnsSlider from './profile_card_settings/GridRowsColumnsSlider';
import SearchBar from './search_albums/SearchBar';
import SearchResult from './search_albums/SearchResult';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ConfigureCard({
  onSearchClick,
  setSearchAlbumInput,
  albums,
  activeId,
  activeAlt,
  activeSrc,
  activeSpotifyId,
  isDragging,
}) {
  return (
    <div className="lg:w-2/5">
      <Tabs defaultValue="search">
        <div>
          <div className="order-2 h-screen w-full lg:order-1">
            <TabsList className="mt-12 ml-4 bg-gray-700">
              <TabsTrigger
                className="text-gray-400 data-[state=active]:bg-white data-[state=active]:text-black"
                value="search"
              >
                検索
              </TabsTrigger>
              <TabsTrigger
                className="text-gray-400 data-[state=active]:bg-white data-[state=active]:text-black"
                value="settings"
              >
                設定
              </TabsTrigger>
            </TabsList>
            <div className="mt-4 h-4/5 w-full rounded-xl border border-[#2D2D2D] bg-[#1E1E1E] shadow-xl shadow-gray-900 md:mx-4">
              <div className="h-full p-12">
                <TabsContent value="search">
                  <SearchBar
                    onSearchClick={onSearchClick}
                    setSearchAlbumInput={setSearchAlbumInput}
                  />
                  <SearchResult
                    activeId={activeId}
                    isDragging={isDragging}
                    activeAlt={activeAlt}
                    activeSrc={activeSrc}
                    activeSpotifyId={activeSpotifyId}
                    albums={albums}
                  />
                </TabsContent>
                <TabsContent value="settings">
                  <GridRowsColumnsSlider />
                </TabsContent>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
