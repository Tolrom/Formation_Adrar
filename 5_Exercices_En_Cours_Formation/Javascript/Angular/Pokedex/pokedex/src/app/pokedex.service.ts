import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  url = 'https://tyradex.vercel.app/api/v1';

  async getAllPokemon(): Promise<Pokemon[]> {
    const data = await fetch(`${this.url}/pokemon`);
    return (await data.json()) ?? [];
  }
  async getFormsByRegion(pokemon: string, region: string): Promise<Pokemon[]> {
    const data = await fetch(`${this.url}/pokemon/${pokemon}/${region}`);
    return (await data.json()) ?? {};
  }

  // Critères de recherche

  async getPokemonById(id: number): Promise<Pokemon | undefined> {
    const data = await fetch(`${this.url}/pokemon/${id}`);
    return (await data.json()) ?? {};
  }
  async getPokemonByName(name: string): Promise<Pokemon | undefined> {
    const data = await fetch(`${this.url}/pokemon/${name}`);
    return (await data.json()) ?? {};
  }
  async getPokemonsByGen(gen: number): Promise<Pokemon | undefined> {
    const data = await fetch(`${this.url}/gen/${gen}`);
    return (await data.json()) ?? [];
  }
}
